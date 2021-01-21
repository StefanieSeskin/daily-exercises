question2;

let albums = {
  cats: [
    "https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://64.media.tumblr.com/30243eb75aa86ee15c7f7f40923b148e/tumblr_pak3z2ET3g1r9qwkso1_500.jpg",
  ],
  dogs: [
    "https://images.unsplash.com/photo-1562317305-58a17fe2c09e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGRvZ3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://pics.me.me/smile-dog-40905755.png",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ],
  ducks: [
    "https://suddl.com/wp-contents/uploads/2018/07/someone-who-consistently-ruins-the-photos.jpg",
    "https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVja3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1578102487209-9229fa2b1cfb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGR1Y2t8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ],
};

document.querySelector("#question1").innerHTML = (
  <h3 style="color: red">Here I am</h3>
);

const nums = [1, 2, 3, 4, 5];
const htmlNums = nums.map((item) => {
  const btn = `<button>${item}</button>`;
  return btn;
});
document.querySelector("#question2").innerHTML = `${btn}`;

//got none of this on my own.  Followed along with
// Thomas during 1:00pm lecture.  Tried to code along.  Could not keep up
// Will re-watch video later so that I have this code for
// reference.  I really need the correct answers/solutions so that
// I have them to refer back to.  But I have to make a choice between
// this and the Etsy homework...
