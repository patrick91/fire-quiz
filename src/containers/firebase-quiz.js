import { Component } from "react";

import firebase from "firebase";
import "firebase/firestore";

import Quiz from "../components/quiz";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
});

const db = firebase.firestore();

class FirebaseQuiz extends Component {
  state = {
    step: Quiz.STEP_WAITING,
    questions: [],
    joined: false
  };

  componentDidMount() {
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        // TODO: an alert is no good UX.
        alert(error);
      });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ userId: user.uid });
        this.fetchData();
      } else {
        // TODO: :)
      }
    });
  }

  fetchData() {
    // TODO: ideally this should not be hardcoded
    this.quiz = db.collection("quizzes").doc("1FJBgjiZ8PufCURPkGx4");

    this.quiz.onSnapshot(doc => {
      this.updateQuizData(doc.data());
    });

    this.quiz
      .collection("questions")
      .onSnapshot(data => this.updateQuizQuestion(data));

    this.quiz
      .collection("users")
      .doc(this.state.userId)
      .onSnapshot(data => this.updateUserStatus(data));
  }

  updateQuizData(data) {
    if (data) {
      this.setState(
        {
          quiz: data
        },
        this.updateQuizStep
      );
    }
  }

  updateQuizQuestion(data) {
    const questions = [];

    data.docs.forEach(doc => questions.push(doc.data()));

    this.setState({ questions }, this.updateQuizStep);
  }

  handleOnJoin() {
    this.quiz
      .collection("users")
      .doc(this.state.userId)
      .set({
        name: "that is a random name"
      });
  }

  updateUserStatus(data) {
    let joined = false;

    if (data.exists) {
      joined = true;
    }

    this.setState(
      {
        joined
      },
      this.updateQuizStep
    );
  }

  updateQuizStep() {
    if (!this.state.quiz) {
      this.setState({
        step: Quiz.STEP_WAITING
      });
    } else if (!this.state.quiz.ready) {
      this.setState({
        step: Quiz.STEP_WAITING
      });
    } else if (!this.state.joined) {
      this.setState({
        step: Quiz.STEP_READY
      });
    } else if (this.state.joined) {
      this.setState({
        step: Quiz.STEP_STARTED
      });
    }
  }

  render() {
    return this.props.render({
      questions: this.state.questions,
      step: this.state.step,
      onJoin: () => this.handleOnJoin()
    });
  }
}

export default FirebaseQuiz;
