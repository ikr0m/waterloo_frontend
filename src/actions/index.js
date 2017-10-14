import axios from 'axios';
import { FETCH_TEST } from './types';

const TEST_API = 'https://jsonplaceholder.typicode.com/posts/1';

export function fetchTest() {
  return function(dispatch) {
    console.log("sending test calls...");
    axios.get(`${TEST_API}`)
    .then(response => {
      // debugger;
      console.log(response.data);
      dispatch({
        type: FETCH_TEST,
        payload: response.data
      });
    })
    .catch(response => {
      // debugger;
      console.log("there was an issue....fetch");
    });
  }
}

/*
export function pushStudent(studentJson) {
  return function(dispatch) {
    // debugger;
    if (studentJson) {
      console.log("sending pushStudent calls...");
      axios.post(`${ISSUE_DIPLOMA_API}`, studentJson)
      .then(response => {
        console.log(response.data);
        dispatch({
          type: PUSH_STUDENT,
          payload: response.data
        })
      }).then(res => {
        console.log("recalling fetch on all students");
        axios.get(`${FETCH_NONISSUED_API}`)
        .then(response => {
          // debugger;
          console.log(response.data);
          dispatch({
            type: FETCH_NONISSUED,
            payload: response.data
          });
        })
        .catch(response => {
          // debugger;
          console.log("there was an issue....fetch");
        });
      })
      .catch(response => {
        // debugger;
        console.log("there was an issue....pushStudent");
      });
    };
    //
  }
}
*/