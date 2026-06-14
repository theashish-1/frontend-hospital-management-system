import API from './axiosConfig';

/**
 * Maps to AuthController: @PostMapping("/signup")
 * @param {Object} signupData - Payload matching SignupRequestDTO
 */
export const signupUser = async (signupData) => {
  try {
    const response = await API.post('/auth/signup', signupData);
    return response.data; // Returns SignupResponseDTO
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

/**
 * Maps to AuthController: @PostMapping("/login")
 * @param {Object} loginData - Payload matching LoginRequestDTO
 */
export const loginUser = async (loginData) => {
  try {
    const response = await API.post('/auth/login', loginData);
    return response.data; // Returns LoginResponseDTO
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

/**
 * Maps to AuthController: @PostMapping("/refresh")
 * Invoked automatically or when access tokens expire. 
 * `withCredentials: true` ensures cookies are implicitly carried over.
 */
export const refreshAuthToken = async () => {
  try {
    const response = await API.post('/auth/refresh');
    return response.data; // Returns new LoginResponseDTO
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};