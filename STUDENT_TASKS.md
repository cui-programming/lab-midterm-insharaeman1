# Student Tasks (Checklist)

☐ Update `src/config/student.js` with your name and reg #.

**A. Barrel Fix**
 ☐ Inspect src/components/ui/index.js and repair the missing export.
 ☐ Replace any direct imports of Text from RN with the UI layer (barrel).

**B. Teacher Message**
☐ Create src/components/custom/TeacherMessage.js (uses only ui/* components).
☐ Render <TeacherMessage /> in App.js (below <AboutMe />).

**C. Tasbih +/−**
☐ Add increment & decrement buttons in each `TasbihList` row using `ui/Button`.
☐ Update only the tapped row’s count in state (immutable update).

**D. Search & Add**
☐ In `SearchAndAdd.js`, build a search box and add box from `ui/TextInput` + `ui/Button`.
☐ Search should filter by `phrase` (case-insensitive). Add should append unique phrases with `count: 0`.

**E. Styling**
☐ Create all styles in `src/styles/styles.js`. No inline styles.
