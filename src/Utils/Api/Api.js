export const getProducts = () => {
  return fetch(`https://run.mocky.io/v3/b5eb9a17-4e56-4841-bb9a-094cd3fcec96`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((header) => {
      return header.json()
    })
    .then((response) => {
      return response
    })
    .catch((e) => {
      return e
    })
}

export const getTaxes = () => {
  return fetch(
    `https://run.mocky.io/v3/fdaf218e-8fb8-4548-92ce-1a505c81d9c8
  `,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((header) => {
      return header.json()
    })
    .then((response) => {
      return response
    })
    .catch((e) => {
      return e
    })
}
export const getIp = () => {
  return fetch(
    `https://ipapi.co/json/
  `,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((header) => {
      return header.json()
    })
    .then((response) => {
      return response
    })
    .catch((e) => {
      return e
    })
}
export const createOrder = (profile) => {
  return fetch(
    `https://run.mocky.io/v3/240a6dfa-24d9-41b7-b224-ae870ddfbc95
  `,
    {
      method: 'POST',
      body: JSON.stringify(profile),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((header) => {
      return header.json()
    })
    .then((response) => {
      return response
    })
    .catch((e) => {
      return e
    })
}
