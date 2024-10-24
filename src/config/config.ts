export const PROXY_CONFIG: Env & {
	EXTRA_PROXY_HEADERS: Record<string, Record<string, string>>;
} = {
	ALLOW_ORIGIN: '',
	BLACK_LIST_DOMAIN: [],
	PROXY_USER_AGENT: 'MisskeyProxy/328e',
	PROXY_KEY: '',
	THIRD_PARTY_CLIENTS_USER_AGENT: [],
	VALIDATE_PATHNAME: false,
	VALIDATE_SIGN: false,
	VALIDATE_REFERER: false,
	RETURN_EMPTY_PIC_WHEN_ERROR: false,
	MAX_CONTENT_LENGTH: 0,
	CACHE_MAX_AGE: 31536000,
	EXTRA_PROXY_HEADERS: {} as Record<string, Record<string, string>>,
};

export const updateProxyConfig = (env: Env) => {
	let extraProxyHeaders = {};
	try {
		extraProxyHeaders = env.EXTRA_PROXY_HEADERS ? JSON.parse(env.EXTRA_PROXY_HEADERS as string || '{}') : {};
	} catch (error) {
		console.error('Error while parsing EXTRA_PROXY_HEADERS:', error);
	}
	Object.assign(PROXY_CONFIG, {
		ALLOW_ORIGIN: env.ALLOW_ORIGIN ?? '',
		BLACK_LIST_DOMAIN: env.BLACK_LIST_DOMAIN ?? [],
		PROXY_USER_AGENT: env.PROXY_USER_AGENT ?? '',
		PROXY_KEY: env.PROXY_KEY ?? '',
		THIRD_PARTY_CLIENTS_USER_AGENT: env.THIRD_PARTY_CLIENTS_USER_AGENT ?? [],
		VALIDATE_PATHNAME: env.VALIDATE_PATHNAME ?? true,
		VALIDATE_SIGN: env.VALIDATE_SIGN ?? false,
		VALIDATE_REFERER: env.VALIDATE_REFERER ?? false,
		RETURN_EMPTY_PIC_WHEN_ERROR: env.RETURN_EMPTY_PIC_WHEN_ERROR ?? false,
		MAX_CONTENT_LENGTH: env.MAX_CONTENT_LENGTH ?? 0,
		CACHE_MAX_AGE: env.CACHE_MAX_AGE ?? 31536000,
		EXTRA_PROXY_HEADERS: extraProxyHeaders,
	});
}
