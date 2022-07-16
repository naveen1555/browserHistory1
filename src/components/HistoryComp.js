import './HistoryComp.css'

const HistoryComp = props => {
  const {userDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="lists">
      <div className="itemcontainer">
        <p className="timeAccessed">{timeAccessed}</p>
        <div className="logoUrl">
          <img src={logoUrl} alt="domain logo" />
        </div>
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
        <button
          type="button"
          className="delete-container"
          onClick={onDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete-icon"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryComp
