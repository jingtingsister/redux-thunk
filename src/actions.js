import {
  CHANGE_TEXT,
  BUTTON_CLICK,
  LETS_LOAD,
  LOADING_COMPLETE,
} from './constants';

function changeText() {
  return {
    type: CHANGE_TEXT,
  };
}

const changeText2 = () => (
  {
    type: CHANGE_TEXT,
  }
);

function buttonClick() {
  return {
    type: BUTTON_CLICK,
  };
}

function letsload() {
  return {
    type: LETS_LOAD,
  };
}

function loadingcomplete(data) { // 從await dispatch(loadingcomplete(json))的json拿到的
  return {
    type: LOADING_COMPLETE,
    content: data, // state裡面的這個data要交給mapStateToProps

  };
}

function mythunk() {
  return (async function (dispatch) { // thunk把dispatch方法傳進來，讓dispatch可以等下再用
    await dispatch(letsload());
    try {
      const response = await fetch(
        'http://www.mocky.io/v2/5959fcf50f000088009fe281',
        {
          method: 'get',
          cors: true,
        },
      );
      const json = await response.json();
      // const actionObj = loadingcomplete();
      // await dispatch(actionObj);
      await dispatch(loadingcomplete(json));
    } catch (err) {
      console.log('Errorrrrrr: ', err.message);
    }
  });
}

export {
  changeText,
  buttonClick,
  letsload,
  loadingcomplete,
  mythunk,
};
