import { imagePath } from "constants";
import { Avatar, AvatarWrapper, Data, Review, Username, Comment, UserDetails, SingleData, Rate} from "./ReviewItem.styled";

export const ReviewItem = ({ overview }) => {
    const { author, content, created_at, author_details: { avatar_path, rating } } = overview;

    let avatar;
    if (avatar_path && avatar_path.startsWith('/https://secure.gravatar.com')) {
        avatar = avatar_path.slice(1, avatar_path.length);
    } else if (!avatar_path) {
        avatar = imagePath.user
    } else {
        avatar = `${imagePath.default}${avatar_path}`;
    }
    const date = new Date(created_at)
    const formatedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
    return (<Review>
        <Data>
            <AvatarWrapper><Avatar src={avatar} alt={author}/></AvatarWrapper>
                <UserDetails>
                    <Username>{author}</Username>
                    <SingleData>Date: {formatedDate}</SingleData>
                    {rating && <SingleData>Rate: <Rate rateType={rating >= 5 ? 'good' : 'bad'}>{rating}</Rate></SingleData>}
                </UserDetails>
        </Data>
        <Comment>{content}</Comment>
    </Review>)
}