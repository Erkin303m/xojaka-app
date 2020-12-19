import buildUrl from 'build-url'
import i18next from 'i18next';

export default (api) => {
    return {
        upload: (data) => {
            let url = buildUrl(`/filemanager/uploads`, {
                queryParams: {
                    ...data.queryParams,
                }
            });
            return api.post(url, data)
        },
        deleteImage: (data) => {
            let url = buildUrl(`/filemanager/${data.id}`, {
                queryParams: {
                    ...data.queryParams,
                }
            });
            return api.delete(url)
        }
    }
}
