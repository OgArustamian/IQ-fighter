import React from 'react';
import { Table } from 'reactstrap';
import { useSelector } from 'react-redux';
import './LadderBoard.css';

export default function LadderBoard() {
  const rating = useSelector((state) => state.rating);
  return (
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
          <tr>
            <th scope="row">
              1
            </th>
            <td>
              Garegin
            </td>
            <td>
              3278
            </td>
          </tr>
          <tr>
            <th scope="row">
              ТЫ
            </th>
            <td>
              ТВОЙ НИК
            </td>
            <td>
              1
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
