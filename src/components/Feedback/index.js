// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  onChangeEmoji = () => {
    this.setState({isEmojiClicked: false})
  }

  render() {
    const {isEmojiClicked} = this.state

    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="card">
          {isEmojiClicked ? (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="list">
                {emojis.map(eachEmoji => (
                  <li key={eachEmoji.id}>
                    <button
                      onClick={this.onChangeEmoji}
                      type="button"
                      className="button"
                    >
                      <img
                        className="image"
                        src={eachEmoji.imageUrl}
                        alt={eachEmoji.name}
                      />
                      <p className="para">{eachEmoji.name}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="love-card">
              <img src={loveEmojiUrl} className="image" alt="love emoji" />
              <h1>Thank You</h1>
              <p>
                we will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
