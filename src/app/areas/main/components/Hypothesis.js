import React, { PropTypes } from 'react'
import CallCount from './CallCount'
import Promote from './Promote'

const Hypothesis = (totalCalls) => (
    <div class="hypothesis">
      <header class="hypothesis__header">
        <h2 class="hypothesis__title">Make your voice heard</h2>
        <p>Turn your passive participation into active resistance. Facebook likes and Twitter retweets can’t create the change you want to see. Calling your Government on the phone can.</p>

        <p><strong>Spend 5 minutes, make 5 calls.</strong></p>

        <Promote issue={null} hasIssue={false} />
      </header>

      <div class="hypothesis__text">
        <p>Calling is the most effective way to influence your representative. Read more about <a href="/about">why calling works.</a>
        </p>

        <h3 class="hypothesis__subtitle">5 Calls:</h3>

        <ul class="hypothesis__list">
        <li>provides phone numbers and scripts so calling is quick and easy</li>
        <li>uses your location to find your local representatives so your calls have more impact</li>
        </ul>

        <h3 class="hypothesis__subtitle">Get the 5 Calls app:</h3>

        <ul class="hypothesis__apps">
        <li><a href="https://itunes.apple.com/us/app/5-calls/id1202558609?mt=8"><img class="ios" src="/img/app-store.svg" alt="5 Calls on the App Store" /></a></li>
        <li><a href="https://play.google.com/store/apps/details?id=org.a5calls.android.a5calls&hl=en"><img class="play" src="/img/google-play-badge.png" alt="5 Calls on Google Play" /></a></li>
        </ul>
      </div>

      {CallCount(totalCalls)}

    </div>)

Hypothesis.propTypes = {
  totalCalls: PropTypes.number.isRequired,
} 

export default Hypothesis