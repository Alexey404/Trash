import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { sendMessage } from '../../Redux/dilogs-reducer'
import Dialogs from './dialogs'

let mapStateToProps = state => {
  return { state: state.dialogsPage, resultCode: state.auth.resultCode }
}


export default compose(
  connect(mapStateToProps, {sendMessage}),
  withAuthRedirect
)(Dialogs)
