import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Modal = ({ open, onClose, row, onApprove, onReject }) => {
  if (!row) return null

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
      <DialogTitle>Applicant Details</DialogTitle>
      <DialogContent dividers>
        <Typography variant='subtitle1' gutterBottom>
          <strong>Name:</strong> {row.name}
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          <strong>Company:</strong> {row.leader}
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          <strong>Job Title:</strong> {row.jobTitle}
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          <strong>Designation:</strong> {row.designation}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onReject(row)} color='error'>
          Reject
        </Button>
        <Button onClick={() => onApprove(row)} color='primary' variant='contained'>
          Approve
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
