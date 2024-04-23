import { expect, test } from '@playwright/test';
import {Url} from './uiPage';

test.describe('Validate UI Page', () => {
   
    test('has title', async ({ page }) => {
        await page.goto(Url);
       // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Polestar/);
      });


  });
  
  