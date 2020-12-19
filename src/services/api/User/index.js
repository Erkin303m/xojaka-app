import buildUrl from 'build-url'

export default (api) => {
    return {
        inputOutput: (data) => {
            let url = buildUrl(`/hr/timepad`, {
                queryParams: {
                    ...data.queryParams,
                    include: "user"
                }
            });
            return api.post(url, data.data)
        },
        signIn: (data) => {
            return api.post(`/hr/user/sign-in`, data.formData)
        },
        getMe: () => {
            let url = buildUrl(`/hr/user/get-me`, {
                queryParams: {

                }
            });
            return api.get(url)
        }
    }
}

