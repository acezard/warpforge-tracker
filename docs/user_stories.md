# User Stories

This document outlines the user stories for the project.

## Create a Deck

**Description:**
As a **player**, I want to create as many decks as I want.

**Acceptance Criteria:**

- [ ] A button is available for creating a new deck.
- [ ] The user can create a deck with a unique name; if not provided, a default name is assigned.
- [ ] The new deck appears on the screen within the tracking table.
- [ ] The deck is saved automatically in local storage.
- [ ] Each existing deck has an associated tab for quick switching.

**Notes/Comments:**

- Investigate the best strategy for storing deck data in local storage.

## Edit a Deck

**Description:**
As a **player**, I want to edit a deck so that I can update its name when necessary.

**Acceptance Criteria:**

- [ ] An edit option is available for each deck.
- [ ] The user can modify the deck’s name.
- [ ] Changes are immediately reflected in the UI (tracking table, tabs, etc.).
- [ ] Updated details are saved in local storage.
- [ ] The user receives confirmation of a successful update.

**Notes/Comments:**

- Consider how changing a deck’s name might affect its associations with other data, such as history logs.

## Delete a Deck

**Description:**
As a **player**, I want to delete a deck so that I can manage my decks more effectively.

**Acceptance Criteria:**

- [ ] A button is available for deleting a deck.
- [ ] The user can select which deck to delete.
- [ ] The selected deck is removed from the screen and local storage.
- [ ] The user is prompted to confirm the deletion before it proceeds.
- [ ] The user has the option to cancel the deletion process.

**Notes/Comments:**

- Consider handling dependencies or related data when a deck is deleted.

## Load Saved Decks on Startup

**Description:**
As a **player**, I want my existing decks and their victory logs to load automatically when I open the app, so I can continue tracking without having to re-enter my data.

**Acceptance Criteria:**

- [ ] On app initialization, the app retrieves all saved decks and their associated data from local storage.
- [ ] If no saved data exists, the app starts with an empty state.
- [ ] The loaded decks display with the correct tabs and data intact.
- [ ] The app gracefully handles errors, such as corrupted or missing data in local storage.

**Notes/Comments:**

- This story ensures a seamless user experience across sessions.
- Consider adding error handling or a recovery mechanism if data retrieval fails.

## Export/Import Deck Data

**Description:**
As a **player**, I want to export my deck data to a file and import it on another device, so I can transfer my progress without relying on server storage.

**Acceptance Criteria:**

- [ ] An option is available for the user to export their deck data as a JSON file.
- [ ] The exported JSON file includes all relevant data (deck names, victory logs, etc.).
- [ ] An option is available for the user to import a previously exported JSON file.
- [ ] On importing, the app correctly integrates the imported data with the current state (either merging or replacing, based on a clear user choice).
- [ ] Appropriate error handling is in place for corrupted or improperly formatted files.
- [ ] The user receives clear notifications of a successful export/import and error messages if the process fails.

**Notes/Comments:**

- Consider the best UX approach for handling merge vs. replace on import.
- Ensure that the UI is intuitive and accessible for both export and import actions.
- This feature serves as a workaround for the limitations of local storage on static apps.

## Log Deck Wins and Losses

**Description:**
As a **player**, I want to log my deck wins and losses so that I can track my progress over time.

**Acceptance Criteria:**

- [ ] A table displays every warlord in the game.
- [ ] The user can select a warlord and log a win or loss (with options for going first or second).
- [ ] Victory history is stored and can be retrieved for review.
- [ ] The app provides clear visual or textual feedback upon successful log entry.

**Notes/Comments:**

- Ensure the UX/UI for logging is intuitive and provides clear feedback.

## Edit Deck History

**Description:**
As a **player**, I want to modify my deck's history so that I can remove or correct specific win/loss entries (e.g., delete all records against a specific warlord).

**Acceptance Criteria:**

- [ ] An interface is provided for reviewing individual win/loss entries.
- [ ] The user can filter or select entries by criteria such as warlord or date.
- [ ] The user can choose to delete or modify selected entries.
- [ ] Upon deletion or modification, the deck’s statistics update accordingly.
- [ ] Changes are persisted in local storage.
- [ ] The user is prompted to confirm changes before finalizing deletions.

**Notes/Comments:**

- Decide if the app should allow modifications (e.g., correcting an entry) or only deletion.
- Provide an intuitive filtering option to simplify editing specific subsets of the history.

## View Deck Statistics

**Description:**
As a **player**, I want to view my deck statistics so that I can understand how well my deck is performing.

**Acceptance Criteria:**

- [ ] A table displays every warlord in the game.
- [ ] The user can view the win/loss ratio for any warlord.
- [ ] Separate win/loss ratios are shown for going first and second.
- [ ] Overall statistics include total games played, won, and lost.
- [ ] The win rate percentage is calculated and displayed.
- [ ] Detailed win rate percentages are provided for specific scenarios (e.g., against a particular warlord, all warlords, or within a specific faction).

**Notes/Comments:**

- Statistics should be calculated on the fly rather than stored in local storage.
