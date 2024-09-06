import { Dispatch, SetStateAction, useState } from 'react';

type UseUpdateStateReturn<T> = [T, (value: Partial<T>) => void, Dispatch<SetStateAction<T>>];

export const useUpdateState = <T extends Record<string, unknown>>(
	defaultState?: T
): UseUpdateStateReturn<T> => {
	const [state, setState] = useState<T>((defaultState || {}) as T);

	const updateState = (value: Partial<T>) => {
		setState((prev) => ({ ...prev, ...value }));
	};

	return [state, updateState, setState];
};
