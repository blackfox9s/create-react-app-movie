import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Marvel's The Avengers",
    poster: "//w.namu.la/s/5110f74cc089d163af0211edfe097e797c3bb97fae25ce85891531471f556f5ec0d4cc178a846dd1b897af3e66f35e13a096f7cfac0aa74846ec31a16a098a4cd8c59ee6dc0b8c85ed155e171de61cb725df920019979aff21123b8f36098bc0"
  },
  {
    title: "Avengers: Age of Ultron",
    poster: "//ww.namu.la/s/7e9a6e427ed42069b3612b58a54e5a18661b73ea48ab0e7dafda1abff81b11ce6024acde31092c67a3c274ce14b0be545a885a7da42f61f91df9853b8befd19b6e89fc22fc1eca513f3b7f4238ea98a6e06996f2097383a3cb90c025e4877a0c"
  },
  {
    title: "Avengers: Infinity War",
    poster: "//ww.namu.la/s/c9894aaa7ee3b41621036ddb46f533171f90f174dc41ad184aea92f2ea97248ddc496c922e43daf3f49f6be30cb10cc32c5033addac815cecfd881ee55225f1847f2724e00f07b7554ef93c1b0eb9749f744182655d2000d1a6418626b705cb4"
  },
  {
    title: "Avengers: Endgame",
    poster: "//w.namu.la/s/f5e136704458a49de23da5eba8d8c0f40d437d3278a0a7a8457d89a4a84a2f25bede426c868abe8ae9c32020e5a066b0d7a8fce3368f91253237d5514a9bf82cd045ce6224c452378db5598a34771f0be9da42ddf13425683e47f8a76895c661"
  },
]

class App extends Component {
  // render : componentWillMount() -> render() -> componentDidMount()
  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {};

  componentDidMount() {
    setTimeout(()=>{
      // this.setState({
      //   greeting  : 'hello again!'
      // });
      console.log('hello');
      this.setState({
        movies : [
          {
            title: "Marvel's The Avengers",
            poster: "//w.namu.la/s/5110f74cc089d163af0211edfe097e797c3bb97fae25ce85891531471f556f5ec0d4cc178a846dd1b897af3e66f35e13a096f7cfac0aa74846ec31a16a098a4cd8c59ee6dc0b8c85ed155e171de61cb725df920019979aff21123b8f36098bc0"
          },
          {
            title: "Avengers: Age of Ultron",
            poster: "//ww.namu.la/s/7e9a6e427ed42069b3612b58a54e5a18661b73ea48ab0e7dafda1abff81b11ce6024acde31092c67a3c274ce14b0be545a885a7da42f61f91df9853b8befd19b6e89fc22fc1eca513f3b7f4238ea98a6e06996f2097383a3cb90c025e4877a0c"
          },
          {
            title: "Avengers: Infinity War",
            poster: "//ww.namu.la/s/c9894aaa7ee3b41621036ddb46f533171f90f174dc41ad184aea92f2ea97248ddc496c922e43daf3f49f6be30cb10cc32c5033addac815cecfd881ee55225f1847f2724e00f07b7554ef93c1b0eb9749f744182655d2000d1a6418626b705cb4"
          },
          {
            title: "Avengers: Endgame",
            poster: "//w.namu.la/s/f5e136704458a49de23da5eba8d8c0f40d437d3278a0a7a8457d89a4a84a2f25bede426c868abe8ae9c32020e5a066b0d7a8fce3368f91253237d5514a9bf82cd045ce6224c452378db5598a34771f0be9da42ddf13425683e47f8a76895c661"
          },
          {
            title: 'Exit',
            poster: 'http://image.chosun.com/sitedata/image/201908/05/2019080501005_0.jpg'
          }
        ]
      });
    }, 5000)
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    });
    return movies;
  };

  render() {
    console.log('did render');
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    )
  }
}

export default App;
