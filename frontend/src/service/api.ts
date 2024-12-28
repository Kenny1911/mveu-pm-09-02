interface SendContactFormData {
  fullName: string,
  email: string,
  question: string,
}


interface SendCalcFormResultsData {
  email: string,
  items: Array<{title: string, sum: number}>,
  sum: number,
}

export interface Api {
  sendContactForm(data: SendContactFormData): Promise<void>

  sendCalcFormResults(data: SendCalcFormResultsData): Promise<void>
}

export class FakeApi implements Api {
  async sendContactForm(data: SendContactFormData): Promise<void> {
    return new Promise<void>((resolve) => {resolve()})
  }

  async sendCalcFormResults(data: SendCalcFormResultsData): Promise<void> {
    return new Promise<void>((resolve) => {resolve()})
  }
}

export class FetchApi implements Api {
  private url: string

  constructor(url: string) {
    this.url = url;
  }

  sendContactForm(data: SendContactFormData): Promise<void> {
      return this.request<void>('/contact-form', 'POST', data);
  }
  sendCalcFormResults(data: SendCalcFormResultsData): Promise<void> {
    return this.request<void>('/calc-form', 'POST', data);
  }

  private async request<T = any>(path: string, method: string = 'GET', data: any = undefined): Promise<T> {
    const headers: {[key: string]: string} = {
      'Content-Type': 'application/json',
    }

    const requestInit: RequestInit = { method, headers }

    if ('HEAD' !== method && 'GET' !== method && undefined !== data) {
      requestInit.body = JSON.stringify(data)
    }

    return fetch(this.url + path, requestInit)
      .then(async r => {
        if (r.status >= 400 && r.status < 600) {
          throw new Error("Bad response from server");
        }

        if (204 === r.status) {
          return; // Empty response, if 204 response status code
        }

        const t = await r.text()

        if ('' === t) {
          return;
        }

        return JSON.parse(t)
      })
  }
}