import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('-');

	t.deepEqual(result, [
		{
			title: 109,
			subtitle: 'numpad -'
		},
		{
			title: 189,
			subtitle: '-'
		}
	]);
});
