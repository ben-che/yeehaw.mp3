// React imports
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

// Material UI Imports
import { FormControl, Input, Box, Button } from '@material-ui/core';

import axios from 'axios';

function Text(){
	const [sentimentText, setSentimentText] = useState("");

	useEffect(() => {
	}, [sentimentText]);

	const submitSentimentText = () => {
		axios({
			method: 'post',
			url: 'http://localhost:5000/sentiment',
			data: {
				sentimentText
			},
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		}).then((response) => console.log(response));
	}

	return (
		<Box display='flex' flexDirection='column' >
			<Box display='flex' justifyContent='center'>
				<FormControl>
					<Input onChange={(event) => setSentimentText(event.target.value)}></Input>
				</FormControl>
			</Box>
			<Box pt={2} display='flex' justifyContent='center'>
				<Button onClick={() => {submitSentimentText()}}>
					Submit
				</Button>
			</Box>
		</Box>
	);
}


const rootElement = document.getElementById('app');

render(<Text/>, rootElement);
