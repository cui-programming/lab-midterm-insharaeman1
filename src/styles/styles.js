// ✅ src/styles/styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // ---------- General Layout ----------
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },

  // ---------- AboutMe ----------
  aboutContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 16,
    marginBottom: 6,
  },

  // ---------- TeacherMessage ----------
  teacherContainer: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f0f8ff',
  },
  teacherHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  teacherMessage: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
  },
  teacherSignature: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: 14,
  },

  // ---------- TasbihList ----------
  tasbihContainer: {
    padding: 16,
  },
  tasbihTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tasbihRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  tasbihPhrase: {
    fontSize: 16,
    flex: 1,
  },
  tasbihCount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  tasbihButtons: {
    flexDirection: 'row',
    gap: 6,
  },

  // ---------- SearchAndAdd ----------
  searchContainer: {
    padding: 16,
  },
  searchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputBox: {
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 4,
  },
});

