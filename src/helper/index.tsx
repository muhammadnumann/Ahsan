export function ApiErrorType(err: any) {
  if (err.response) {
    console.log('response', err.response.data)
    return err.response.data.error || 'Response Error'
  } else if (err.request) {
    console.log('request Error', err)
    return 'Network Error'
  } else {
    console.log('other Error', err)
    return err.message
  }
}
