import { useEffect, useRef, useState } from 'react';
import { Chess } from 'chess.js';
import axios from 'axios';
import React from 'react';
import { Chessboard } from 'react-chessboard';
import githublogo from './GitHub-Mark-64px.png';


export default function Myboard({ boardWidth }) {
    
    const chessboardRef = useRef();
    const [game, setGame] = useState(new Chess());
    const [arrows, setArrows] = useState([]);
    const [boardOrientation, setBoardOrientation] = useState('white');
    const [currentTimeout, setCurrentTimeout] = useState(undefined);
    const [maxtime, setmaxtime] = useState(5);
    console.log(githublogo);
    
    
    
    function safeGameMutate(modify) {
        setGame((g) => {
        const update = { ...g };
        modify(update);
        return update;
        });
    }


    function makeAIMove() {

        // exit if the game is over
        if (game.game_over() || game.in_draw()) return;
        var AImove = ''
        //console.log(maxtime)
        axios({
            method: 'get',
            url: "https://us-central1-light-processor-352001.cloudfunctions.net/chessfunctiontest?FEN="+game.fen()+"&MAXTIME="+maxtime,
                })
        .then(res => {            
            safeGameMutate((game) => {
                game.move(res.data.bestmove,{sloppy: true});
              });

            
        })



    }
    
    function onDrop(sourceSquare, targetSquare) {
        const gameCopy = { ...game };
        const move = gameCopy.move({
          from: sourceSquare,
          to: targetSquare,
          promotion: 'q' // always promote to a queen for example simplicity
        });
        setGame(gameCopy);
    
        // illegal move
        if (move === null) return false;
    
        // store timeout so it can be cleared on undo/reset so computer doesn't execute move
        const newTimeout = setTimeout(makeAIMove, 200);
        setCurrentTimeout(newTimeout);
        return true;
      }


      //board size stuff
      const [boardSize,detectResize] = useState(Math.min(window.innerHeight,window.innerWidth)*.75);
      const detectSize = () => {
        detectResize(Math.min(window.innerHeight,window.innerWidth)*.85)
      }
      useEffect(() => {
        window.addEventListener('resize',detectSize)

        return () => {
          window.removeEventListener('resize',detectSize)
        }
      }, [boardSize])




      return (
        <div class="container">
          <div class=".container themed-grid-col">
            <div>
              <Chessboard
                id="PlayVsRandom"
                animationDuration={200}
                boardOrientation={boardOrientation}
                boardWidth={boardSize}
                customArrows={arrows}
                position={game.fen()}
                onPieceDrop={onDrop}
                customBoardStyle={{
                  borderRadius: '4px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
                }}
                arePremovesAllowed = {true}
                ref={chessboardRef}
              />
              <br></br>
              <a
                type='button'
                class = 'btn btn-outline-dark'
                // className="rc-button"
                onClick={() => {
                  safeGameMutate((game) => {
                    game.undo();
                    game.undo();
                  });
                  // stop any current timeouts
                  clearTimeout(currentTimeout);
                }}
              >
              undo
              </a>

              <a
                type='button'
                class = 'btn btn-outline-dark'
                // className="rc-button"
                onClick={() => {
                  safeGameMutate((game) => {
                    game.reset();
                  });
                  // stop any current timeouts
                  clearTimeout(currentTimeout);
                }}
              >
              reset
              </a>
              <br></br><br></br>
              <form class='bd-example' action="javascript:void(0);">
                <label for="depthtime">Max AI time:  </label>
                <input type="number" id="depthtime" value={maxtime} onChange={(e)=>setmaxtime(e.target.value)}></input>
              </form>
              <br></br>
              <a type="button" class='btn btn-outline-dark' href="https://github.com/samuelfdove/chessaiapi">View this on GitHub
              </a>
              <div>
              <image src={githublogo} width={100} height={50}/>
              <image src={require('./GitHub-Mark-64px.png')} />
              </div>
              
            </div>
          </div>
        </div>
        
      )

    }

