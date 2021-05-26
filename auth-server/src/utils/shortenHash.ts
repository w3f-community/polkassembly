// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default function (hash: string): string {
	return `${hash.substring(0, 3)}...${hash.substring(hash.length - 3)}`;
}
