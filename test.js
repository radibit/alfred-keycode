import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('r');

	t.deepEqual(result, [
		{
			title: 82,
			subtitle: 'r'
		}
	]);
});
