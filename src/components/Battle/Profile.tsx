import { FC } from "react";
import {PlayerPreview} from "./PlayerPreview";
import { IProfile } from "../../API";

interface IProfileProps {
  info: IProfile;
}

const Profile: FC<IProfileProps> = ({info}): JSX.Element => {
  return (
    <PlayerPreview
      avatar={info.avatar_url}
      username={info.login}>
    
    <ul className="space-list-items">
      {info.name && <li>{info.name}</li>}
      {info.location && <li>{info.location}</li>}
      {info.company && <li>{info.company}</li>}
      <li>Followers: {info.followers}</li>
      <li>Following: {info.following}</li>
      <li>Public Repos: {info.public_repos}</li>
      {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
    </ul>
    </PlayerPreview>
  )
}

export default Profile;