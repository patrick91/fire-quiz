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
    questions: []
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
    const quiz = db.collection("quizzes").doc("1FJBgjiZ8PufCURPkGx4");

    quiz.onSnapshot(doc => {
      this.updateQuizData(doc.data());
    });

    quiz
      .collection("questions")
      .onSnapshot(data => this.updateQuizQuestion(data));
  }

  updateQuizData(data) {
    if (data.ready) {
      this.setState({
        step: Quiz.STEP_READY
      });
    } else {
      this.setState({
        step: Quiz.STEP_WAITING
      });
    }
  }

  updateQuizQuestion(data) {
    const questions = [];

    data.docs.forEach(doc => questions.push(doc.data()));

    this.setState({ questions });
  }

  handleOnJoin() {
    // TODO: add current user in quiz' users
    // quiz.collection("users");
  }

  render() {
    return this.props.render({
      ...this.state,
      onJoin: () => this.handleOnJoin()
    });
  }
}

export default FirebaseQuiz;
