import { useContext } from 'react';
import uuid from 'uuid/v4';
import { GameContext } from '../contexts/GameContext';

export default function History() {
  const {
    state: { history },
    dispatch,
  } = useContext(GameContext);

  function handleClick(index) {
    dispatch({ type: 'UPDATE_HISTORY', payload: [history, index] });
  }
  return (
    <div>
      {history.map((data, index) => (
        <div className="history" key={uuid()}>
          <button type="button" onClick={() => handleClick(index)}>
            Voltar para jogada {index}
          </button>
        </div>
      ))}
    </div>
  );
}
