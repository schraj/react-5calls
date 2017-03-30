import { connect } from 'react-redux'
import ContactStatus from '../components/ContactStatus'

const getMessage = (count) => {
  switch (count % 4) {
    case 0: {
        return "Not too shabby.  Keep up the networking."
    }
    case 1: {
        return "Only " + count + ".  Needs some work."
    }
    case 2: {
        return count + " contacts. Start tweeting."
    }
    default: {
        return "You have all the contacts you need.  Back to work."
    }
  }
}

const mapStateToProps = (state) => ({
  contactCount: state.contacts.length,
  statusMessage: getMessage(state.contacts.length)
})

const mapDispatchToProps =  ({
})

const ContactStatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactStatus)

export default ContactStatusContainer
