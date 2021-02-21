import React from 'react';
import './keyboard.css';


export type KeyboardProps = {
		id: number;
		name: string
}

const Keyboard: React.FC<{}> = () => {
  return (
				<div className="keyboard">
				<div className="row"><button type="button" className="btn0"><span className="xs">esc</span>
					</button><button type="button" className="btn0"><span className="xs noxscale"><span className="emoji">&nbsp;</span></span><span className="lr xxxs">F1</span>
					</button><button type="button" className="btn0"><span className="xs noxscale"><span className="emoji">&nbsp;</span></span><span className="lr xxxs">F2</span>
					</button><button type="button" className="btn0"><span className="xs noxscale"></span><span className="lr xxxs">F3</span>
					</button><button type="button" className="btn0"><span className="xxxs noxscale"></span><span className="lr xxxs">F4</span>
					</button><button type="button" className="btn0"><span className="lr xxxs">F5</span>
					</button><button type="button" className="btn0"><span className="lr xxxs">F6</span>
					</button><button type="button" className="btn0"><span className="sm"></span><span className="lr xxxs">F7</span>
					</button><button type="button" className="btn0"><span className="sm"></span><span className="lr xxxs">F8</span>
					</button><button type="button" className="btn0"><span className="sm"></span><span className="lr xxxs">F9</span>
					</button><button type="button" className="btn0"><span className="xs noxscale"><span>&nbsp;</span></span><span className="lr xxxs">F10</span>
					</button><button type="button" className="btn0"><span className="xs noxscale"><span>&nbsp;</span></span><span className="lr xxxs">F11</span>
					</button><button type="button" className="btn0"><span className="xs noxscale"><span>&nbsp;</span></span><span className="lr xxxs">F12</span>
					</button><button type="button" className="btn0"><span className="xs noxscale">eject</span>
					</button>
				</div>
				<div className="row"><button type="button" className="btn1"><span className="lr xxxs">F13</span>
					</button><button type="button" className="btn1"><span className="lr xxxs">F14</span>
					</button><button type="button" className="btn1"><span className="lr xxxs">F15</span>
					</button>
				</div>
				<div className="row"><button type="button" className="btn1"><span className="lr xxxs">F16</span>
					</button><button type="button" className="btn1"><span className="lr xxxs">F17</span>
					</button><button type="button" className="btn1"><span className="lr xxxs">F18</span>
					</button><button type="button" className="btn1"><span className="lr xxxs">F19</span>
					</button>
				</div>
				<div className="row"><button type="button" className="btn2"><span className="sm">~<br/>`</span>
					</button><button type="button" className="btn2"><span className="sm">!<br/>1</span>
					</button><button type="button" className="btn2"><span className="sm">@<br/>2</span>
					</button><button type="button" className="btn2"><span className="sm">#<br/>3</span>
					</button><button type="button" className="btn2"><span className="sm">$<br/>4</span>
					</button><button type="button" className="btn2"><span className="sm">%<br/>5</span>
					</button><button type="button" className="btn2"><span className="sm">^<br/>6</span>
					</button><button type="button" className="btn2"><span className="sm">&amp;<br/>7</span>
					</button><button type="button" className="btn2"><span className="sm">*<br/>8</span>
					</button><button type="button" className="btn2"><span className="sm">(<br/>9</span>
					</button><button type="button" className="btn2"><span className="sm">)<br/>0</span>
					</button><button type="button" className="btn2"><span className="sm">_<br/>-</span>
					</button><button type="button" className="btn2"><span className="sm">+<br/>=</span>
					</button><button type="button" className="btn3"><span className="lr xs">delete</span>
					</button>
				</div>
				<div className="row"><button type="button" className="btn2"><span className="xs">fn</span>
					</button><button type="button" className="btn2"><span className="xs">home</span>
					</button><button type="button" className="btn2"><span className="xs">page up</span>
					</button>
				</div>
				<div className="row"><button type="button" className="btn2"><span className="xs">clear</span>
					</button><button type="button" className="btn2"><span>=</span>
					</button><button type="button" className="btn2"><span>/</span>
					</button><button type="button" className="btn2"><span>*</span>
					</button>
				</div>
				<div className="row"><button type="button" className="btn3"><span className="ll xs">tab</span>
					</button><button type="button" className="btn2"><span>Q</span>
					</button><button type="button" className="btn2"><span>W</span>
					</button><button type="button" className="btn2"><span>E</span>
					</button><button type="button" className="btn2"><span>R</span>
					</button><button type="button" className="btn2"><span>T</span>
					</button><button type="button" className="btn2"><span>Y</span>
					</button><button type="button" className="btn2"><span>U</span>
					</button><button type="button" className="btn2"><span>I</span>
					</button><button type="button" className="btn2"><span>O</span>
					</button><button type="button" className="btn2"><span>P</span>
					</button><button type="button" className="btn2"><span className="sm"><br/>[</span>
					</button><button type="button" className="btn2"><span className="sm"><br/>]</span>
					</button><button type="button" className="btn2"><span className="sm">|<br/>\</span>
					</button>
				</div>
				<div className="row"><button type="button" className="btn2"><span className="xs noxpad">delete</span>
					</button><button type="button" className="btn2"><span className="xs">end</span>
					</button><button type="button" className="btn2"><span className="xs">page down</span>
					</button>
				</div>
				<div className="row"><button type="button" className="btn2"><span>7</span>
					</button><button type="button" className="btn2"><span>8</span>
					</button><button type="button" className="btn2"><span>9</span>
					</button><button type="button" className="btn2"><span>-</span>
					</button>
				</div>
				<div className="row"><button type="button" id="caps-lock" className="btn4"><span className="ul xs">•</span><span className="ll xs">caps lock</span>
					</button><button type="button" className="btn2"><span>A</span>
					</button><button type="button" className="btn2"><span>S</span>
					</button><button type="button" className="btn2"><span>D</span>
					</button><button type="button" className="btn2"><span>F</span><span className="bump"></span>
					</button><button type="button" className="btn2"><span>G</span>
					</button><button type="button" className="btn2"><span>H</span>
					</button><button type="button" className="btn2"><span>J</span><span className="bump"></span>
					</button><button type="button" className="btn2"><span>K</span>
					</button><button type="button" className="btn2"><span>L</span>
					</button><button type="button" className="btn2"><span className="sm">:<br/>;</span>
					</button><button type="button" className="btn2"><span className="sm">&quot;<br/>'</span>
					</button><button type="button" className="btn4"><span className="lr xs">return</span>
					</button>
				</div>
				<div className="row"></div>
				<div className="row"><button type="button" className="btn2"><span>4</span>
					</button><button type="button" className="btn2"><span>5</span><span className="bump"></span>
					</button><button type="button" className="btn2"><span>6</span>
					</button><button type="button" className="btn2"><span>+</span>
					</button>
				</div>
				<div className="row"><button type="button" className="btn5"><span className="ll xs">shift</span>
					</button><button type="button" className="btn2"><span>Z</span>
					</button><button type="button" className="btn2"><span>X</span>
					</button><button type="button" className="btn2"><span>C</span>
					</button><button type="button" className="btn2"><span>V</span>
					</button><button type="button" className="btn2"><span>B</span>
					</button><button type="button" className="btn2"><span>N</span>
					</button><button type="button" className="btn2"><span>M</span>
					</button><button type="button" className="btn2"><span className="sm">&lt;<br/>,</span>
					</button><button type="button" className="btn2"><span className="sm">&gt;<br/>.</span>
					</button><button type="button" className="btn2"><span className="sm">?<br/>/</span>
					</button><button type="button" className="btn5"><span className="lr xs">shift</span>
					</button>
				</div>
				<div className="row"><button type="button" className="btn2"><span><span className="up"></span></span></button>
				</div>
				<div className="row"><button type="button" className="btn2"><span>1</span>
					</button><button type="button" className="btn2"><span>2</span>
					</button><button type="button" className="btn2"><span>3</span>
					</button><button type="button" className="btn10"><span className="lr xs">enter</span>
					</button>
				</div>
				<div className="row"><button type="button" className="btn7"><span className="ll xs">control</span>
					</button><button type="button" className="btn6"><span className="ll xs">option</span>
					</button><button type="button" className="btn7"><span className="ll xs">command</span><span className="lr xs noxscale"></span>
					</button><button type="button" className="btn-longest"><span></span>
					</button><button type="button" className="btn7"><span className="ll xs noxscale"></span><span className="lr xs">command</span>
					</button><button type="button" className="btn6"><span className="lr xs">option</span>
					</button><button type="button" className="btn7"><span className="lr xs">control</span>
					</button>
				</div>
				<div className="row"><button type="button" className="btn2"><span><span className="left"></span></span></button><button type="button" className="btn2"><span><span className="down"></span></span></button><button type="button" className="btn2"><span><span className="right"></span></span></button>
				</div>
				<div className="row"><button type="button" className="btn9"><span>0</span>
					</button><button type="button" className="btn8"><span>.</span>
					</button><button type="button" className="btn1"><span className="lr xs">enter</span>
					</button>
				</div>
			</div>
  );
}

export default Keyboard;
