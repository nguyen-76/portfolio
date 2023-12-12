import React, {useState, useEffect} from 'react';
import "./App.css";
import Header from './component/Header';
import Avatar from './component/Avatar';
import PartList from './component/PartList';

const total = {
	body: 17,
	eyes: 17,
	hair: 73,
	mouth: 24,
	eyebrows: 15,
	hat: 28,
	glasses: 17,
	clothing1: 5,
	clothing2: 5,
	clothing3: 9,
};

function App() {
  const [body, setBody] = useState(1);
  const [eyes, setEyes] = useState(1);
  const [hair, setHair] = useState(1);
  const [eyebrow, setEyebrow] = useState(1);
  const [clothing1, setClothing1] = useState(0);
	const [clothing2, setClothing2] = useState(0);
	const [clothing3, setClothing3] = useState(0);
	const [mouth, setMouth] = useState(2);
	const [glasses, setGlasses] = useState(2);
	const randomize = () => {
		setBody(Math.floor(Math.random() * total.body));
		setEyes(Math.floor(Math.random() * total.eyes));
		setHair(Math.floor(Math.random() * total.hair));
		setEyebrow(Math.floor(Math.random() * total.eyebrow));
		setMouth(Math.floor(Math.random() * total.mouth));
		setGlasses(Math.floor(Math.random() * total.glasses));
		setClothing1(Math.floor(Math.random() * total.clothing1));
		setClothing2(Math.floor(Math.random() * total.clothing2));
		setClothing3(Math.floor(Math.random() * total.clothing3));
	};
	useEffect(() => {
		randomize();
	}, []);
  return (
    <div className="container">
    	<Header title="Character Customization" subTitle="Create your own avatar" />
		<div className="creation">
			<div className="portrait">
				<Avatar body={body} eyes={eyes} hair={hair} clothing1={clothing1} clothing2={clothing2} clothing3={clothing3} mouth={mouth} eyebrow={eyebrow} glasses={glasses} />
				<button className="button" onClick={() => randomize()}>
					Randomize your Avatar
				</button>
			</div>
			<div>
				<div className="style-list">
					<h2>Body</h2>
					<PartList total={total.body} path="body" set={setBody} selected={body} />
				</div>
				<div className="style-list">
					<h2>Eyes</h2>
					<PartList total={total.eyes} path="eyes" set={setEyes} selected={eyes} zoom={2} />
				</div>
				<div className="style-list">
					<h2>Hair</h2>
					<PartList total={total.hair} path="hair" set={setHair} selected={hair} />
				</div>
				<div className="style-list">
					<h2>Eyebrow</h2>
				<PartList total={total.eyebrows} path="eyebrows" set={setEyebrow} selected={eyebrow} zoom={2} />
				</div>
				<div className="style-list">
					<h2>Clothing style 1</h2>
					<PartList total={total.clothing1} path="clothes/layer_1" set={setClothing1} selected={clothing1} />
				</div>
				<div className="style-list">
					<h2>Clothing style 2</h2>
					<PartList total={total.clothing2} path="clothes/layer_2" set={setClothing2} selected={clothing2} />
				</div>
				<div className="style-list">
					<h2>Clothing style 3</h2>
					<PartList total={total.clothing3} path="clothes/layer_3" set={setClothing3} selected={clothing3} zoom={2} top="-10px" />
				</div>
				<div className="style-list">
					<h2>Mouth</h2>
					<PartList total={total.mouth} path="mouths" set={setMouth} selected={mouth} zoom={2} />
				</div>
				<div className="style-list">
					<h2>Glasses</h2>
					<PartList total={total.glasses} path="accessories/glasses" set={setGlasses} selected={glasses} />
				</div>
			</div>
		</div>
    </div>
	
  )
}

export default App
