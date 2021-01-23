import styled from "styled-components";
import male from '../assets/male.svg';
import female from '../assets/female.svg';
import genderless from '../assets/genderless.svg';

const getGenderIcon = (gender) => (
    gender === "Male" ? male : gender === "Female" ? female : genderless
)

const RecordItem = ({ item, onAction }) => (
    <RecordItemWrapper onClick={onAction}>
        <div className="name">{ `${item.FirstName} ${item.LastName}` } <span><img src={getGenderIcon(item.Gender)} /></span> </div>
        <div className="extras">
            <span>{ item.Email }</span>
            <span></span>
            <span>{ item.PhoneNumber }</span>
        </div>
    </RecordItemWrapper>
)

const RecordItemWrapper = styled.div`
    padding: 1.6rem .7rem;
    border-bottom: 1px #eee solid;

    &:hover {
        background: rgba(13, 13, 13, 0.03);
        cursor: pointer;
    }

    .name {
        font-size: 20px;
        display: flex;
        align-items: center;

        span {
            margin-left: 10px;
            img {
                width: 20px;
            }
        }
    }

    .extras {
        font-size: 14px;
        color: #898989;
        display: flex;
        align-items: center;

        & > span:nth-child(2) {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #999;
            margin: 0 10px;
        }
    }
`

export default RecordItem;