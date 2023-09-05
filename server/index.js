// import express from 'express';
// import cors from 'cors';
// import PocketBase from 'pocketbase';
// import serverCfg from './cfg/server.json' assert {type: 'json'};
const express = require('express');
const cors = require('cors');
const PocketBase = require('pocketbase/cjs');
const serverCfg = require('./cfg/server.json');
const app = express();
const pb = new PocketBase('http://192.168.1.100:3002');
const PORT = serverCfg.port || 3001;

app.use(express.json());
app.use(cors());

app.get('/api/posts/:id', async (req, res) => {
	const { id } = req.params;

	const post = await pb.collection('posts').getOne(id, {
		expand: 'tags'
	});
	res.status(200).json(post);
});

app.get('/api/posts', async (req, res) => {
	const { amount, sort, page } = req.query;

	const posts = amount === undefined
		? await pb.collection('posts').getFullList({
			sort: sort || '-created',
			expand: 'tags'
		})
		: await pb.collection('posts').getList(page || 1, amount, {
			sort: sort || '-created',
			expand: 'tags'
		});

	res.status(200).json(posts.items);
});

app.get('/api/tags', async (req, res) => {
	const { amount, sort, page } = req.query;

	let tags;

	if (amount === undefined)
		tags = await pb.collection('tags').getFullList({
			sort: sort || '-created'
		});
	else tags = await pb.collection('tags').getList(page || 1, amount, {
		sort: sort || '-created'
	});

	res.status(200).json(tags.items);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));