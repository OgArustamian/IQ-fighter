import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import './LadderBoard.css';
import { getRatingInfo } from '../../Redux/Actions/ratingAction';
import { useWsContext } from '../Context/Context';
import MainNavbar from '../Navbar/MainNavbar';

export default function LadderBoard() {
  const dispatch = useDispatch();
  const { rank } = useSelector((state) => state.rating);
  const users = useSelector((state) => state.users);
  const { ws, readyState } = useWsContext();

  console.log(rank);

  useEffect(() => {
    if (ws.readyState === 1) {
      dispatch(getRatingInfo(ws, users.id));
      console.log(ws);
    }
  }, [readyState]);
  return (
    <>
      <MainNavbar />
      <div className="ladderBoard-conteiner">
        <h1 className="about-title">🔥 Топ-10 Игроков 🔥</h1>
        <Table
          size="sm"
          striped
          className="table-form"
        >
          <thead>
            <tr>
              <th>
                🧠
              </th>
              <th>
                Ник-нейм
              </th>
              <th>
                Кол-во побед
              </th>
            </tr>
          </thead>
          <tbody>
            {rank && rank.map((el) => (
              <tr>
                <th scope="row">
                  {el.rank}
                </th>
                <td>
                  {el.username}
                </td>
                <td>
                  {el.victory_count}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
