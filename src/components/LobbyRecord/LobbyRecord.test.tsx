import { render, screen } from "@testing-library/react";

import LobbyRecord from '.';
import RoomFirestoreInterface, {example} from "../../interfaces/room";

const userUid: string = 'user-uid'
const data: RoomFirestoreInterface = {...example, usersUids: [userUid, 'other-user-uid']};

test('render lobby record component', () => {
    function clickHandler() {}

    render(<LobbyRecord onClick={clickHandler}>{data.usersUids.find(el => el === userUid)}</LobbyRecord>);
    const lobbyRecord = screen.getByTestId('lobby-record-test');

    expect(lobbyRecord).toBeInTheDocument();
    expect(lobbyRecord).toHaveTextContent(userUid);
});