import React from 'react'
import Link from 'next/link'

async function getData() {
  const res = await fetch('http://localhost:3000/api/attractions')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  console.log(data)
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Attractions</h1>
      <ul style={styles.list}>
        {data.map(attraction => (
          <li key={attraction.id} style={styles.listItem}>
            <img
              src={attraction.coverimage}
              alt={attraction.name}
              width={100}
              style={styles.image}
            />
            <div style={styles.details}>
              <span style={styles.name}>{attraction.name}</span>
              <Link href={`/attractions/${attraction.id}`} style={styles.link}>
                Read More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f8f9fa'
  },
  header: {
    color: '#343a40',
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '20px'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  image: {
    borderRadius: '8px',
    marginRight: '15px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#495057'
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    marginTop: '5px'
  }
}
