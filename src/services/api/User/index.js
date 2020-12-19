import buildUrl from 'build-url'

export default (api) => {
    return {
        getMe: () => {
            let url = buildUrl(`/hr/user/get-me`, {
                queryParams: {

                }
            });
            return api.get(url)
        }
    }
}

