import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not alowed' });
	}

	const savedContact = await prisma.guest.create({
		data: JSON.parse(req.body),
	});

	res.json(savedContact);
}
