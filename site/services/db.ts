import { db } from './firebase';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, orderBy, Timestamp } from 'firebase/firestore';
import { Product, BlogPost } from '../types';

// Products
export const fetchProducts = async (): Promise<Product[]> => {
  const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
};

export const createProduct = async (product: Omit<Product, 'id'>) => {
  await addDoc(collection(db, 'products'), { ...product, createdAt: Timestamp.now() });
};

export const updateProduct = async (id: string, product: Partial<Product>) => {
  const docRef = doc(db, 'products', id);
  await updateDoc(docRef, product);
};

export const deleteProduct = async (id: string) => {
  await deleteDoc(doc(db, 'products', id));
};

// Blogs
export const fetchBlogs = async (): Promise<BlogPost[]> => {
  const q = query(collection(db, 'blogs'), orderBy('date', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
};

export const createBlog = async (blog: Omit<BlogPost, 'id'>) => {
  await addDoc(collection(db, 'blogs'), { ...blog, createdAt: Timestamp.now() });
};

export const deleteBlog = async (id: string) => {
  await deleteDoc(doc(db, 'blogs', id));
};

// Messages
export interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
  createdAt: any;
  read: boolean;
}

export const sendMessage = async (data: Omit<ContactMessage, 'id' | 'createdAt' | 'read'>) => {
  await addDoc(collection(db, 'messages'), {
    ...data,
    read: false,
    createdAt: Timestamp.now()
  });
};

export const fetchMessages = async (): Promise<ContactMessage[]> => {
  const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ContactMessage));
};

export const markMessageRead = async (id: string) => {
    const docRef = doc(db, 'messages', id);
    await updateDoc(docRef, { read: true });
}

export const deleteMessage = async (id: string) => {
  await deleteDoc(doc(db, 'messages', id));
};
