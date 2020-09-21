import React from "react";
import TechnologiesPresenter from "./TechnologiesPresenter";
import star from "../../../images/star.jpg";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      image: null,
      loading: true
    };
    this.tm = null;
    this.increase = this.increase.bind(this);
  }

  async componentDidMount() {
    this.tm = setInterval(this.increase, 20);
    try {
      await this.fetchImage(`${star}`);
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    clearInterval(this.tm);
  }

  fetchImage(src) {
    const img = new Image();
    img.onload = () => {
      this.setState({
        image: img,
        loading: false
      });
    };
    img.src = src;
  }

  increase() {
    const { percent } = this.state;
    percent === 100
      ? clearInterval(this.tm)
      : this.setState({
          percent: percent + 1
        });
  }

  render() {
    const { percent, image, loading } = this.state;
    return (
      <TechnologiesPresenter
        htmlPercent={Math.min(percent, 75)}
        cssPercent={Math.min(percent, 75)}
        javascriptPercent={Math.min(percent, 60)}
        nodeJSPercent={Math.min(percent, 60)}
        reactPercent={Math.min(percent, 60)}
        loading={loading}
        image={image}
      />
    );
  }
}
