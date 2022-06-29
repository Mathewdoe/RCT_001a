// import { customers } from '../../../data'

// export default function customerHandler({ query: { id } }, res) {
//   const filtered = customers.filter((p) => p.id === id)

//   // User with id exists
//   if (filtered.length > 0) {
//     res.status(200).json(filtered[0])
//   } else {
//     res.status(404).json({ message: `User with id: ${id} not found.` })
//   }
// }
