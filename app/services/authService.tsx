// src/services/authService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Token storage keys
const AUTH_TOKEN_KEY = 'auth_token';
const USER_DATA_KEY = 'user_data';

/**
 * Sign in user with email and password
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise<object>} - User data
 */
export const login = async (email, password) => {
  try {
    // In a real app, you would make an API call to your auth server
    // This is a mock implementation
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful login response
    const userData = {
      id: 'user123',
      email,
      name: 'John Doe',
      avatar: 'https://example.com/avatar.png',
    };

    const authToken = 'mock_jwt_token_' + Math.random().toString(36).substring(7);

    // Store auth data locally
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, authToken);
    await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));

    return userData;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

/**
 * Sign up a new user
 * @param {string} name - User's full name
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise<object>} - User data
 */
export const signup = async (name, email, password) => {
  try {
    // In a real app, you would make an API call to your auth server
    // This is a mock implementation
    if (!name || !email || !password) {
      throw new Error('Name, email, and password are required');
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful signup response
    const userData = {
      id: 'user' + Math.floor(Math.random() * 1000),
      name,
      email,
      avatar: 'https://example.com/default-avatar.png',
    };

    const authToken = 'mock_jwt_token_' + Math.random().toString(36).substring(7);

    // Store auth data locally
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, authToken);
    await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));

    return userData;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};

/**
 * Sign out the current user
 * @returns {Promise<void>}
 */
export const logout = async () => {
  try {
    // Remove stored auth data
    await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
    await AsyncStorage.removeItem(USER_DATA_KEY);
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

/**
 * Check if user is logged in
 * @returns {Promise<boolean>}
 */
export const isLoggedIn = async () => {
  try {
    const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
    return !!token;
  } catch (error) {
    console.error('Auth check error:', error);
    return false;
  }
};

/**
 * Get current user data
 * @returns {Promise<object|null>}
 */
export const getCurrentUser = async () => {
  try {
    const userDataString = await AsyncStorage.getItem(USER_DATA_KEY);
    return userDataString ? JSON.parse(userDataString) : null;
  } catch (error) {
    console.error('Get user error:', error);
    return null;
  }
};

/**
 * Get authentication token
 * @returns {Promise<string|null>}
 */
export const getAuthToken = async () => {
  try {
    return await AsyncStorage.getItem(AUTH_TOKEN_KEY);
  } catch (error) {
    console.error('Get token error:', error);
    return null;
  }
};

/**
 * Sign in with Google
 * @returns {Promise<object>} - User data
 */
export const loginWithGoogle = async () => {
  try {
    // In a real app, you would implement Google OAuth
    // This is a mock implementation
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful Google login
    const userData = {
      id: 'google_user_' + Math.floor(Math.random() * 1000),
      name: 'Google User',
      email: 'user@gmail.com',
      avatar: 'https://example.com/google-avatar.png',
      provider: 'google',
    };

    const authToken = 'mock_google_jwt_token_' + Math.random().toString(36).substring(7);

    // Store auth data locally
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, authToken);
    await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));

    return userData;
  } catch (error) {
    console.error('Google login error:', error);
    throw error;
  }
};

/**
 * Sign in with Facebook
 * @returns {Promise<object>} - User data
 */
export const loginWithFacebook = async () => {
  try {
    // In a real app, you would implement Facebook OAuth
    // This is a mock implementation
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful Facebook login
    const userData = {
      id: 'fb_user_' + Math.floor(Math.random() * 1000),
      name: 'Facebook User',
      email: 'user@facebook.com',
      avatar: 'https://example.com/fb-avatar.png',
      provider: 'facebook',
    };

    const authToken = 'mock_fb_jwt_token_' + Math.random().toString(36).substring(7);

    // Store auth data locally
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, authToken);
    await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));

    return userData;
  } catch (error) {
    console.error('Facebook login error:', error);
    throw error;
  }
};

/**
 * Reset password
 * @param {string} email - User's email
 * @returns {Promise<boolean>}
 */
export const resetPassword = async (email) => {
  try {
    // In a real app, you would make an API call to your auth server
    // This is a mock implementation
    if (!email) {
      throw new Error('Email is required');
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Always return true for mock implementation
    return true;
  } catch (error) {
    console.error('Password reset error:', error);
    throw error;
  }
};

/**
 * Update user profile
 * @param {object} userData - Updated user data
 * @returns {Promise<object>} - Updated user data
 */
export const updateProfile = async (userData) => {
  try {
    // In a real app, you would make an API call to your auth server
    // This is a mock implementation
    
    // Get current user data
    const currentUserDataString = await AsyncStorage.getItem(USER_DATA_KEY);
    const currentUserData = currentUserDataString ? JSON.parse(currentUserDataString) : null;
    
    if (!currentUserData) {
      throw new Error('User is not logged in');
    }
    
    // Update user data
    const updatedUserData = { ...currentUserData, ...userData };
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store updated user data
    await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(updatedUserData));
    
    return updatedUserData;
  } catch (error) {
    console.error('Update profile error:', error);
    throw error;
  }
};