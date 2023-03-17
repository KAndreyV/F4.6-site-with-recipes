import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';

export default class RecipesService{
	getDishes() {
		const url = `${API_URL}/dishes/`;
		return axios.get(url).then(response => response.data);
	}  
	// getCustomersByURL(link){
	// 	const url = `${API_URL}${link}`;
	// 	return axios.get(url).then(response => response.data);
	// }
	getRecipe(pk) {
		const url = `${API_URL}/dishes/${pk}`;
		return axios.get(url).then(response => response.data);
	}
	// deleteCustomer(customer){
	// 	const url = `${API_URL}/api/customers/${customer.pk}`;
	// 	return axios.delete(url);
	// }
	// createCustomer(customer){
	// 	const url = `${API_URL}/api/customers/`;
	// 	return axios.post(url,customer);
	// }
	// updateCustomer(customer){
	// 	const url = `${API_URL}/api/customers/${customer.pk}`;
	// 	return axios.put(url,customer);
	// }
}