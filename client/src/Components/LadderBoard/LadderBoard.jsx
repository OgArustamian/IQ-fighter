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
  console.log('rankkkkk', rank);
  const users = useSelector((state) => state.users);
  console.log('Uuuuuusers', users);
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
            {rank && rank.map((el) => {
              if (el.userID === users.id) {
                return (
                  <tr className="yourRate">
                    <th scope="row" className="rateTextColor">
                      <strong>{el.rank}</strong>
                    </th>
                    <td className="rateTextColor">
                      <strong>{el.username}</strong>
                    </td>
                    <td className="rateTextColor">
                      <strong>{el.victory_count}</strong>
                    </td>
                  </tr>
                );
              }
              return (
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
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
