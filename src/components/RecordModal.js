import styled from "styled-components";
import close from '../assets/close.svg';


const RecordModal = ({ open, profile, onClose }) => (
    open ? (
        <ModalWrapper>
            <section className="content">
                <span className="close" onClick={onClose}>
                    <img src={close} alt="close" />
                </span>
                <h2>{ profile.FirstName }</h2>
                <hr />
                <section>
                    <div>
                        <table>
                            {
                            Object.keys(profile).map((key) => (
                                <tr>
                                    <td>{ key }</td>
                                    <td>{ profile[key] }</td>
                                </tr>
                                ))
                            }
                        </table>
                    </div>
                </section>
            </section>
        </ModalWrapper>
    ) : null
)

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(13, 13, 13, .5);
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
        position: relative;
        background: white;
        max-width: calc(100vw - 20px);
        max-height: calc(100vh - 10px);
        width: 500px;
        height: 500px;
        min-height: 400px;
        border-radius: 13px;
        padding: .56rem 1rem;
        display: flex;
        flex-flow: nowrap column;

        .close {
            width: 30px;
            height: 30px;
            position: absolute;
            right: 10px;
            top: 10px;
            background: #ff4172;
            color: white;
            padding: 1rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all ease-in-out 300ms;

            img {
                width: 20px;
            }

            &:hover {
                box-shadow: 0px 1px 5px #aaa;
            }
        }

        hr {
            width: 100%;
            height: 1px;

            border-color: rgba(13, 13, 13, .1);
        }

        section {
            flex: 1;
            width: 100%;
            overflow: hidden;
            & > div {
                width: 100%;
                height: 100%;
                overflow: auto;
                padding-right: 5px;

                &::-webkit-scrollbar {
                    width: 5px;
                    height: 100%;
                }

                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                    border-radius:10px;
                }
                &::-webkit-scrollbar-thumb {
                    background-color: dodgerblue;
                    border-radius:10px;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    td { padding: 10px; text-align: left }
                    tr:nth-child(even) {background-color: #f2f2f2}
                }
            }
        }
    }
`

export default RecordModal;