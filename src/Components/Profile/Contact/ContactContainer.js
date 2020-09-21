import React from "react";
import ContactPresenter from "./ContactPresenter";
import star from "../../../images/star.jpg";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      loading: true
    };
  }

  async componentDidMount() {
    try {
      await this.fetchImage(`${star}`);
    } catch (error) {
      console.log(error);
    }
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

  render() {
    const { image, loading } = this.state;
    return <ContactPresenter loading={loading} image={image} />;
  }
}
