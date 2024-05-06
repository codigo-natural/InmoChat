import { useContext, useState } from 'react'
import './profileUpdatePage.scss'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import apiRequest from '../../lib/apiRequest'
import { UploadWidget } from "../../components/UploadWidget"

export const ProfileUpdatePage = () => {
  const { currentUser, updateUser } = useContext(AuthContext)
  const [error, setError] = useState("")
  const [avatar, setAvatar] = useState([])

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const { username, email, password } = Object.fromEntries(formData)

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0]
      });

      updateUser(res.data)
      navigate("/profile")
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }
  }

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              defaultValue={currentUser?.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={currentUser?.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar[0] ||
            currentUser.avatar ||
            "/noavatar.jpg"}
          alt="avatar"
          className='avatar'
        />
        <UploadWidget
          uwConfig={{
            cloudName: "inmochat",
            uploadPreset: "inmochat",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  )
}
