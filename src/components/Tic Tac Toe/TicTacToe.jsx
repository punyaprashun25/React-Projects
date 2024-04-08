import React, { useEffect, useState } from 'react'



function Sqaure({ value, HandleOnClick }) {
    return <button className='square border h-32 w-32 flex items-center justify-center font-semibold text-3xl border-red-600 border-solid' onClick={HandleOnClick}>{value}</button>
}

const TicTacToe = () => {
    // for tracking board
    let [sqaure, setSqaure] = useState(Array(9).fill(""));
    // for tracking who's turn
    let [isXTurn, setIsXTurn] = useState(false);
    // for showing current status of the game
    let [status, setStatus] = useState("");

    function HandleOnClick(currIndex) {
        // we have to first mark O / X on the click index
        let cpySqaure = [...sqaure];
        // checking that if square is already filled or winner found then return
        if (getWinner(sqaure) || cpySqaure[currIndex]) return;
        cpySqaure[currIndex] = isXTurn ? "X" : "O";
        // reverse the turn
        setIsXTurn(!isXTurn);
        setSqaure(cpySqaure);
    }
    function HandleReset() {
        setSqaure(Array(9).fill(''));
        setIsXTurn(false);
        setStatus("")
    }
    function getWinner(sqaure) {
        // 0 1 2
        // 3 4 5
        // 6 7 8
        const winningPattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < winningPattern.length; i++) {
            const [x, y, z] = winningPattern[i];
            if (sqaure[x] && sqaure[x] === sqaure[y] && sqaure[y] === sqaure[z] && sqaure[x] === sqaure[z])
                return sqaure[x];
        }
        return null;
    }
    useEffect(() => {
        // cases for wining, draw and current turn status
        if (!getWinner(sqaure) && sqaure.every((item) => item !== ""))
            setStatus(`Match is Draw! Please restart the game`);
        else if (getWinner(sqaure))
            setStatus(`Winner is ${getWinner(sqaure)}`);
        else
            setStatus(`Current Player is ${isXTurn ? "X" : "O"}`);
    }, [sqaure, isXTurn])
    return (
        <div className="h-screen game-box flex flex-col gap-8 items-center justify-center">
            <h2 className="status text-2xl font-medium">{status}</h2>
            <div className='tic-tac-toe-container flex flex-col'>
                <div className="row flex">
                    <Sqaure value={sqaure[0]} HandleOnClick={() => HandleOnClick(0)} />
                    <Sqaure value={sqaure[1]} HandleOnClick={() => HandleOnClick(1)} />
                    <Sqaure value={sqaure[2]} HandleOnClick={() => HandleOnClick(2)} />
                </div>
                <div className="row flex">
                    <Sqaure value={sqaure[3]} HandleOnClick={() => HandleOnClick(3)} />
                    <Sqaure value={sqaure[4]} HandleOnClick={() => HandleOnClick(4)} />
                    <Sqaure value={sqaure[5]} HandleOnClick={() => HandleOnClick(5)} />
                </div>
                <div className="row flex">
                    <Sqaure value={sqaure[6]} HandleOnClick={() => HandleOnClick(6)} />
                    <Sqaure value={sqaure[7]} HandleOnClick={() => HandleOnClick(7)} />
                    <Sqaure value={sqaure[8]} HandleOnClick={() => HandleOnClick(8)} />
                </div>
            </div>
            <button type="reset" className='bg-black text-white px-4 py-2 rounded-lg' onClick={HandleReset}>Restart</button>
        </div>
    )
}

export default TicTacToe
