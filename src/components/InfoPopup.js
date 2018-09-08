import React, { Component } from "react";
import "./InfoPopup.css";

const Panel = props => {
  return (
    <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div className="flipper" style={{ backgroundColor: props.color }}>
        <div className="front">
          <h1>{props.title}</h1>
          <div className="emoji" id={props.emojiId}>
            {props.emoji}
          </div>
        </div>
        <div className="back">
          <span className="panel-description">{props.info}</span>
        </div>
      </div>
    </div>
  );
};
export default class InfoPopup extends Component {
  chooseRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  render() {
    const colors = [
      "#308a8e",
      "#db2745",
      "#43bc0f",
      "#1e70ce",
      "#13a07a",
      "#9b0c96",
      "#7c44ff",
      "#d61c00",
      "#e0cd00",
      "#001377"
    ];
    return (
      <div className="popup">
        <div className="row">
          <Panel
            color={this.chooseRandomColor(colors)}
            title={"After Midnight"}
            emojiId={""}
            emoji={"🌮"}
            info="From midnight until 3 a.m., at least one Saturday night per month, legions of Davidson students gravitate to the Alvarez College Union while most citizens of the outside world slumber."
          />
          <Panel
            color={this.chooseRandomColor(colors)}
            title={"Live Thursday"}
            emojiId={""}
            emoji={"🎤"}
            info="Live Thursdays, a sort of open mic night performance put on every Thursday in the Student Union. There are three singing groups on campus that are awesome, as well as an enormous dance ensemble that puts on two sold out performances a semester."
          />
          <Panel
            color={this.chooseRandomColor(colors)}
            title={"Duke Family Performance Hall"}
            emojiId={"dukeEmoji"}
            emoji={"💃🏽"}
            info="The 600+ seat proscenium theatre is housed within the Knobloch Campus Center along with the Alvarez College Union, creating a seamless relationship between academics, art, entertainment and college community life."
          />
          <Panel
            color={this.chooseRandomColor(colors)}
            emojiId={""}
            emoji={"🍕"}
            title={"Davis Cafe"}
            info="Located at the center of campus life, the Davis Café is on the third floor of the Alvarez College Union. Meal plans are accepted at the Café."
          />
          <Panel
            color={this.chooseRandomColor(colors)}
            emojiId={""}
            emoji={"💼"}
            title={"Career Center"}
            info="The Center for Career Development is here to help you turn your academic knowledge into a real-world career."
          />
          <Panel
            color={this.chooseRandomColor(colors)}
            emojiId={""}
            emoji={"📫"}
            title={"Post Office"}
            info="Our Campus Post Office, located in Knobloch Campus Center, serves our students, faculty and staff with a variety of mailing and shipping services."
          />
          <Panel
            color={this.chooseRandomColor(colors)}
            emojiId={""}
            emoji={"👟"}
            title={"Gym"}
            info="The center has aerobic step and treadmill machines, weight stations and free weights for use by students, faculty and staff members. "
          />
          <Panel
            color={this.chooseRandomColor(colors)}
            emojiId={""}
            emoji={"🛶"}
            title={"Davidson Outdoors"}
            info="Davidson Outdoors offers the students, faculty and staff of the college a variety of outdoor activities and courses throughout the year."
          />
          <Panel
            color={this.chooseRandomColor(colors)}
            emojiId={""}
            emoji={"⛪️"}
            title={"Chaplain's Office"}
            info="The chaplains are available to all members of the college community from any religious tradition or secular background, for pastoral counseling, spiritual direction, and program planning. "
          />
          <Panel
            color={this.chooseRandomColor(colors)}
            emojiId={"centerEmoji"}
            emoji={"🏛"}
            title={"Center for Civic Engagement"}
            info="The Center for Civic Engagement promotes learning through engagement with the community. "
          />
        </div>
      </div>
    );
  }
}
